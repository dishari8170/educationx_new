import '@/styles/globals.css'
import DefaultLayout from "@/Layouts/DefaultLayout";
import {Toaster} from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return <>
    <div><Toaster/></div>

   <Component {...pageProps} />

  </>
}
