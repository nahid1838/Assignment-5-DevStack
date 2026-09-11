import FooterLogo from "../assets/logo-text.png"

export default function Footer() {
    return (
        <>
        
        <hr  className="border-gray-100"/>
        <div className="container mx-auto flex justify-between pt-20 pb-15">
            <div className="flex flex-col gap-5">
                <img src={FooterLogo} alt="" className="w-32 h-auto" />
                <p className="text-[#64748B]">Curated tools, technologies, and resources for developers building<br />modern software.</p>

                <ul className="flex gap-4">
                    <li><a href="">GitHub</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Linkedin</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">PRODUCT</p>
                <ul className="text-[#64748B]">
                    <li><a href="">Home</a></li>
                    <li><a href="">Techonologies</a></li>
                    <li><a href="">Projects</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">COMPANY</p>
                <ul className="text-[#64748B]">
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <p className="font-semibold">LEGAL</p>
                <ul className="text-[#64748B]">
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                </ul>
            </div>
        </div>

        <hr className="border-gray-100" />
        <div className="container mx-auto flex justify-between text-[#64748B] pt-8 mb-8">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <ul className="flex gap-5">
                <li><a href="">Privacy</a></li>
                <li><a href="">Terms</a></li>
            </ul>
        </div>
        
        </>
    )
}