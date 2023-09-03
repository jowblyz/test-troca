const express = require('express')
const app = express()
const port = 3000

function fetchImei(imei){
    console.log(imei)
    return fetch("https://itroca.com.br/api/calculator/check/imei/"+imei, {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
          "sec-ch-ua": "\"Chromium\";v=\"116\", \"Not)A;Brand\";v=\"24\", \"Google Chrome\";v=\"116\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          "x-xsrf-token": "eyJpdiI6IlBTOVRTWVZQMXFFTmoyTzgwSENPREE9PSIsInZhbHVlIjoiZjI2RHByWEphVExsazZ5U04vTkhQUnd2cm5zeExVU0V0NE9sZjlaVklOUGZyeTZEUDA3R1pkS1krdE02SmpEelZzYnh6ZkJCbEE1L0ZaZFhFTlNaRm16WkErZ3JkZk5FK0t1TVZmLzRuLzlGUm0yRFlDY3pibGpvb25YamZiRlgiLCJtYWMiOiJiYWE2YjgwMWFlNmJiYzQ2MTIzMDgyYjdhMGMwMDZmZDE2YjA0YWY0NzMzOWViOTFhMjE0OWRhYzhlMjYzMDBjIiwidGFnIjoiIn0=",
          "cookie": "_fbp=fb.2.1692994438467.775171109; i_troca_cookie_consent=1; XSRF-TOKEN=eyJpdiI6IlBTOVRTWVZQMXFFTmoyTzgwSENPREE9PSIsInZhbHVlIjoiZjI2RHByWEphVExsazZ5U04vTkhQUnd2cm5zeExVU0V0NE9sZjlaVklOUGZyeTZEUDA3R1pkS1krdE02SmpEelZzYnh6ZkJCbEE1L0ZaZFhFTlNaRm16WkErZ3JkZk5FK0t1TVZmLzRuLzlGUm0yRFlDY3pibGpvb25YamZiRlgiLCJtYWMiOiJiYWE2YjgwMWFlNmJiYzQ2MTIzMDgyYjdhMGMwMDZmZDE2YjA0YWY0NzMzOWViOTFhMjE0OWRhYzhlMjYzMDBjIiwidGFnIjoiIn0%3D; itroca_session=eyJpdiI6IlhBb0hMcFkwYmpqaXJZTVdzUUZHOFE9PSIsInZhbHVlIjoiWmErbHdvaUlSWndvdFFCNFU3RUhXRnlDOCtnR0l1SmI5eWFlbHQramVRQWxYOFdSQzhZN0R1VHZpVUxDa0l6Y0RLM3ZvbGlyM3JLc1h3MzFNbmVTK09SZWthdFo1ajZHVjByNGp4aW12dnlNUlM3bU44UDdwNlJxNkNzVGUwZXYiLCJtYWMiOiJkNTk2NGM5MzBjZGM2MzhlZTIzZjE4MzIzY2YyZWY3NDg0NTRhYzcwYjc2NmM4MWM1OTQ1MDliODBiY2QxODFjIiwidGFnIjoiIn0%3D; uhmjK17K5ejMAaK6f5Mq55KtWxDOalFHEq5bIMS5=eyJpdiI6IitIdWZLWEZCOXQrM29ZbWlPNmVsR3c9PSIsInZhbHVlIjoiSnNMZ1AwL2I4N0o0N1Fpd0JXYkN1SFkyeUswcjhuWFhsQTNFdUJXcEtXQjNkNVQzYkZ0bnFuaUc5b1RJYkljcy9JUXVrcXYrMzJpcHlvb2xjMENpVStqQkVZSTN5N2YreU8yU2F4WVluYzQvYXVnaTZUTEszeHF3NzhuV3VBaUYyYkF3VGtJakptOHdBNDRNdEhnbTIyOU9TMWlUZjRrc0dUT1dNWitXUmI3eUg0aDdvZjlWUkZpKzB3R080SVh4Q1hOSU1zWWFzRlJubXB3WGdJallyd0R2cldYVnhmYkc2YUloVjA5ekdacC9tR1d0eWVmYWFKUXFKUWxIQkFVWFB4TjdvS2FXaFdLOVp6WTN6d2w0b1h0NCtnUWozVzIyS3NMWGlWQjRTL2lMaXVncHMwdTJrQUVSak5LTkkrZ3kzTnJvZFBsNTVCOFNwNFNFQWJUWjRlemRvclZsVjBrQmhzUlUyUmlQWTU2WTBlYTh2cHN1NkZaSjRqRXBOMFJGMjVRUlFRSExVWnc3U0NJcDRkZVJiNXNMTys0S2pYUDllK1Q1dTAxT0I0UFlFbzN2dGRtaFJmdHN1TmtCUnEvanN3TTB3MUkyMzVCWjJBazZmb2pIUUdpQ3VBNEZGYVN4eGRyY3pLdzlmR1crYUcrNmJSK0lXdnl0R0I1Wk0vUDJuSERHOE9nZ0JKaUpxTmJBc00wWDZUUDlFcFNBSnprTlptNFc3cmlGd3VlK2NxdUhvUFNiVGZCOU92dnpuc3phQlVkWW5DNWVZODRzRWt2U21oajFzd2tOSFRyampDSUlCYk0vRmdqWFpyR0F0MXJJbkczd05sOWp1eGhXRU1tdnVCd0U0TDRhRFhJNzg2aE9HS1JjV3c9PSIsIm1hYyI6IjU5MDdlNzViN2NiOWRjOGVjZTkxZWZlZjRhMmY2MTYxYTRmZjc2MTc5OWEzOTFkZGY5Yjc0MTIyNDY3MjU5ZGUiLCJ0YWciOiIifQ%3D%3D",
          "Referer": "https://itroca.com.br/lojista/painel/avaliacao/353855323273706",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      })
}

app.get('/', (req, res) => {
  if(req.query.imei){
    fetchImei(req.query.imei).then(async function(response){
    let json = await response.json();
    res.status(200);
    res.send(json);
}).catch(async function(response){
    res.status(400);
    res.send(JSON.stringify({
        'message': 'Invalid IMEI.'
    }));
});
  } else {
    res.status(400);
    res.send(JSON.stringify({
        'message': 'Specify a IMEI.'
    }));
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})