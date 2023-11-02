import '../public/css/global.css'
import '../public/css/style.css'
import '../public/css/mobile.css'


export default function RootLayout({children}) {
    return <html lang="en">
        <body>
            {children}
        </body>
    </html>
}
