import { SiInstagram, SiYoutube, SiFacebook, SiX } from "@icons-pack/react-simple-icons";
import {
  Phone,
  Mail,
} from "lucide-react";

function Commercial() {
    return (
    <div className="hidden md:block w-full bg-[#252B42] text-white text-sm font-bold">
        <div className="mx-auto flex w-full items-center justify-between px-8 py-4">
            <div className="flex items-center gap-6">
                <a href="tel:(225)555-0118" className="flex items-center gap-1.5">
                <Phone size={16} />
                <span>(225) 555-0118</span>
                </a>
                <a href="mailto:michelle.rivera@example.com" className="flex items-center gap-1.5">
                <Mail size={16} />
                <span>michelle.rivera@example.com</span>
                </a>
            </div>

            <p className="hidden lg:block">
                Follow Us and get a chance to win 80% off
            </p>

            <div className="flex items-center gap-3">
                <span>Follow Us :</span>
                <a href="#" aria-label="Instagram"><SiInstagram size={16} /></a>
                <a href="#" aria-label="YouTube"><SiYoutube size={16} /></a>
                <a href="#" aria-label="Facebook"><SiFacebook size={16} /></a>
                <a href="#" aria-label="Twitter"><SiX size={16} /></a>
            </div>
        </div>
    </div>   
    )
}

export default Commercial