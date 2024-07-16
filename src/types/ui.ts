import { type HTMLProps, type SVGProps } from "react";

export type ChipColor = 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'white';
export type ChipSize = 'sm' | 'md' | 'lg';
export type ChipProps = HTMLProps<HTMLDivElement> & {
    color?: ChipColor;
};

export type IconProps = SVGProps<SVGSVGElement> & {
    name: 'accept' | 'instagram' | 'reject' | 'tiktok';
};