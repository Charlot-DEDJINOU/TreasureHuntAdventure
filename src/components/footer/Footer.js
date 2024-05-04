export default function Footer() {
    return(
        <footer className="w-full bg-black flex items-center justify-center p-3 text-white">
            <div className="container flex flex-col items-center">
                <b className="text-center mb-3 text-3xl text-success">Treasure hunt</b>
                <p className="text-center">
                    L’être humain à le potentiel de devenir quelque chose d’autre - David Goggins
                </p>
                <div className="copyright my-3">
                    &copy; Copyright <strong><span>Treasure hunt </span></strong>All Rights Reserved
                </div>
                <div>
                    Created by
                    <a
                    href="https://charlot-dedjinou.vercel.app"
                    className="font-bold text-white text-decoration-none mx-2"
                    >
                    Charlot DEDJINOU</a>
                </div>
            </div>
        </footer>
    )
}