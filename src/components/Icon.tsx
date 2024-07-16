import { type FC } from "react";
import { type IconProps } from "~/types/ui";
import ArrowDownIcon from "./icons/Arrow-down";
import RejectIcon from "./icons/Reject";
import InstagramIcon from "./icons/Instagram";
import TikTokIcon from "./icons/Tiktok";

const Icon: FC<IconProps> = ({ name, ...props }) => {
    switch (name) {
        case 'accept':
            return <ArrowDownIcon {...props} />
        case 'instagram':
            return <InstagramIcon {...props} />
        case 'reject':
            return <RejectIcon {...props} />
        case 'tiktok':
            return <TikTokIcon {...props} />
        default:
            return null;
    }
}

export default Icon;