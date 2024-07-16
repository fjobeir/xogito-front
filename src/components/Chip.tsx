import { type FC, type PropsWithChildren } from "react";
import { type ChipProps, type ChipColor } from "~/types/ui";

type Props = PropsWithChildren<ChipProps>;

const colors: {
    [key in ChipColor]: string;
} = {
    primary: 'bg-primary text-black',
    success: 'bg-green-100 text-green-600',
    warning: 'bg-yellow-100 text-yellow-500',
    error: 'bg-red-100 text-red-600',
    neutral: 'bg-gray-100 text-gray-400',
    white: 'bg-white text-black border border-solid border-primary',
};

const Chip: FC<Props> = ({children, color = 'primary', className, ...props}) => {

    return (
        <div className={`rounded-full py-1 px-4 ${colors[color]} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Chip;