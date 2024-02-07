import json
import tornado.ioloop
import tornado.web
import tornado.websocket
import tornado.httpserver
connected_clients = {}



def update_dict(dictionary, group_name, new_value):
    if group_name in dictionary:
        group_array = dictionary[group_name]
    else:
        dictionary[group_name] = []
        group_array = dictionary[group_name]

    group_array.append(new_value)

    if len(group_array) > 10:
        dictionary[group_name] = group_array[-10:]

        


        
        
my_dict = {}



class Rx(tornado.websocket.WebSocketHandler):
    def check_origin(self, origin):
        return True
    def open(self):
        connected_clients.update({self:False})

    def on_message(self, message):
        print(message)
        try:
            df=json.loads(message)
            if df["m"]=="new join rh":
                connected_clients.update({self:df["g"]})
                for i in my_dict[df["g"]]:
                    self.write_message(i)

            else:
                update_dict(my_dict, df["g"] ,message)
                print("msg",connected_clients)
                for client,id in connected_clients.items():
                    if id==df["g"]:
                        client.write_message(message)
        except:
            print("rr")

    def on_close(self):
        connected_clients.pop(self)
        print("WebSocket closed")



a=tornado.web.Application([
("/",Rx)

])

ssl_options = {
    "certfile": "/www/server/panel/vhost/ssl/edu.codeyourbusiness.site/fullchain.pem",
    "keyfile": "/www/server/panel/vhost/ssl/edu.codeyourbusiness.site/privkey.pem",
}

http_servers = tornado.httpserver.HTTPServer(a, ssl_options=ssl_options)

http_servers.listen(8888)


tornado.ioloop.IOLoop.current().start()