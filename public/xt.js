const axios = require('axios');






async function dd() {


    let access_token = (await axios.post("https://zoom.us/oauth/token?grant_type=account_credentials&account_id=cuG2beDYQsKX95G6MLDylg", null, {

        headers: {
            'Authorization': 'Basic ' + Buffer.from("nOi8JiPR92DltwEgfaaYg:0MEMbuLum1StDPMtMLgzyBKSPeibOGTO").toString('base64')
        }
    })).data.access_token


    //"start_time":"2021-07-30",
    //         "duration": "60",


    let x = {
        "topic": "Testing 01",
        "type": "1",


        "settings": {
            "host_video": "true",
            "participant_video": "true", "join_before_host": "true",
            "mute_upon_entry": "true",
            "breakout room": {
                "enable": true
            }
        }
    }

    const rt = (await axios.post("https://api.zoom.us/v2/users/me/meetings", x, {
        headers: {
            'Authorization': 'Bearer ' + access_token
        }
    })).data


    console.log(rt)



}

dd()

//
// let accid="cuG2beDYQsKX95G6MLDylg"
//    let ZOOM_CLIENT_ID="nOi8JiPR92DltwEgfaaYg"
//   let  ZOOM_CLIENT_SECRET="0MEMbuLum1StDPMtMLgzyBKSPeibOGTO"
//
//
//
// const apiUrl = 'https://api.zoom.us/v2/users/me/meetings';
// const tokenUrl = 'https://zoom.us/oauth/token';
//
//    const rtx = async (accessToken) => {
//
//
//       const responseMeeting = await axios.post(apiUrl, {
//          topic: 'Your Meeting Topic',
//          type: 2, // Scheduled Meeting
//          start_time: '2023-01-01T12:00:00Z', // Replace with your desired start time
//
//       }, {
//          headers: {
//             Authorization: `Bearer ${accessToken}`,
//          },
//       });
//       console.log(responseMeeting)
//
//    }
//
//
// axios.post(tokenUrl, null, {
//    params: {
//       grant_type: 'client_credentials',
//       client_id: ZOOM_CLIENT_ID,
//       client_secret: ZOOM_CLIENT_SECRET,
//    },
// })
//     .then(response => {
//        let accessToken = response.data;
//        console.log(accessToken);
//
// // rtx(accessToken)
//
//
//
//
//
//     })
//     .catch(error => {
//        console.error(error.response.data);
//     });
//
//
//

//    let ZOOM_API_BASE_URL="https://api.zoom.us/v2"
//
//
// // Function to obtain OAuth token
// async function getOAuthToken() {
//     try {
//         const response = await axios.post('https://zoom.us/oauth/token', null, {
//             params: {
//                 grant_type: 'client_credentials',
//                 client_id: ZOOM_CLIENT_ID,
//                 client_secret: ZOOM_CLIENT_SECRET,
//             },
//         });
//
//         return response.data.access_token;
//     } catch (error) {
//         console.error('Error getting OAuth token:', error.response?.data || error.message);
//         throw error;
//     }
// }
//
// // Function to create a Zoom meeting
// async function createZoomMeeting() {
//     const accessToken = await getOAuthToken();
//
//     try {
//         const response = await axios.post(
//             `${ZOOM_API_BASE_URL}/users/me/meetings`,
//             {
//                 topic: 'Node.js Zoom Meeting',
//                 type: 2, // 2 for scheduled meeting
//                 start_time: '2023-01-01T12:00:00Z', // Replace with your desired start time
//                 duration: 60, // Duration in minutes
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                 },
//             }
//         );
//
//         console.log('Meeting created:', response.data);
//     } catch (error) {
//         console.error('Error creating Zoom meeting:', error.response?.data || error.message);
//     }
// }
//
// // Call the function to create a Zoom meeting
// createZoomMeeting();
