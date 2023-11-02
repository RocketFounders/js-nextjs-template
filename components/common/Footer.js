export function Footer() {
    return (
        <footer className={"footer"}>
            <div className={"footer-list"}>
                <div className={"container"}>
                    <ul className={"list-unstyled footer-list font-size-16"}>
                        <li><a href={'#'}>About project</a></li>
                        <li><a href={'#'}>Rules</a></li>
                        <li><a href={'#'}>Ads</a></li>
                        <li><a href={'#'}>Confidentiality</a>
                        </li>
                        <li><a href={'#'}>Feedback</a></li>
                    </ul>
                </div>
            </div>
            <div className={"container"}>
                © &nbsp; <a href="/">Template</a> &nbsp; › &nbsp; 2023 &nbsp;
            </div>
        </footer>
    );
}
