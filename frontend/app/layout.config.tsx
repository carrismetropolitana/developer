import CMDarkLogo from "@/components/brand/CMDarkLogo";
import { IconBook2, IconWorld } from "@tabler/icons-react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <CMDarkLogo style={{
                height: "2.5rem"
            }} />
        ),
    },
    links: [
        {
            icon: <IconWorld />,
            text: "Website",
            url: "https://carrismetropolitana.pt",
            external: true,
        },
        {
            icon: <IconBook2 />,
            text: "Blog",
            url: "https://blog.carrismetropolitana.pt",
            external: true,
        }
    ],
    githubUrl: "https://github.com/carrismetropolitana",
};
