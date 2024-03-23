"use client"
import Link from "next/link";
import profileActions from "@/actions/profile";
import {useCookies} from "next-client-cookies";
import {useRouter} from "next/navigation";

export function Navbar({profile}) {
    const photoUrl = profile?.photoUrl || 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=';
    const name = profile?.firstName || 'John';
    const lastName = profile?.lastName || 'Doe';
    const cookies = useCookies();
    const router = useRouter();

    const logoutProfileHandler = () => {
        const token = cookies.get('jwtToken');
        if (!token) {
            return
        }
        profileActions.logoutProfile(token).then(r => {
            cookies.remove('jwtToken')
            profileActions.getProfile(null).then();
            router.refresh()
        })
    }

    return (
        <nav className={'navbar'}>
            <div className={"menu-box"}>
                <div className="logo"></div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/authenticated">Authenticated</Link></li>
                </ul>
                {profile?.id ?
                    <>
                        <Link href='/profile'>
                            <div>{name}</div>
                            <div>{lastName}</div>
                        </Link>
                        <div className={'profile-photo'} style={{backgroundImage: `url(${photoUrl})`}}/>
                        <div> /</div>
                        <button onClick={logoutProfileHandler}>Logout</button>
                    </>
                    :
                    <>
                        <div><Link href="/login">Login</Link></div>
                        <div>/</div>
                        <div><Link href="/register">Register</Link></div>
                    </>
                }
            </div>
        </nav>
    );
}
