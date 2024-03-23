import '../public/css/global.css'
import '../public/css/style.css'
import '../public/css/mobile.css'
import {CookiesProvider} from "next-client-cookies/server";


export default function RootLayout({children}) {
    return <CookiesProvider>
        <html lang="en">
            <body>
                 {children}
            </body>
        </html>
    </CookiesProvider>
}
