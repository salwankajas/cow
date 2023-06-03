'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"
export default function Slider() {
    const pathname = usePathname()
    const url: string[] = ["sb_black.png", "cs_black.png"]
    let last_scroll = 0;
    let slider: Element | null;
    // scroll animation
    function scrolls(slider: Element | null) {
        if (slider) {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll) {
                slider.classList.remove('scrolled-down');
                slider.classList.add('scrolled-up');
            } else if (scroll_top == 0 || scroll_top < 80) {
                // console.log(`${scroll_top} == ${7}`)
            } else {
                if (scroll_top + document.body.clientHeight >= document.body.scrollHeight - 80) {
                    slider.classList.remove('scrolled-down');
                    slider.classList.add('scrolled-up');
                } else {
                    slider.classList.remove('scrolled-up');
                    slider.classList.add('scrolled-down');
                }
            }
            last_scroll = scroll_top;
        }
    }
    function handler() {
        scrolls(slider)
    }
    // handle resize slider
    function resizeHandler() {
        if (slider) {
            if (window.innerWidth <= 768) {
                slider = document.querySelector('.slider')
                if (slider) {
                    last_scroll = 0
                    window.addEventListener('scroll', handler)
                }
            } else {
                window.removeEventListener('scroll', handler)
                slider.classList.remove('scrolled-down');
                slider.classList.remove('scrolled-up');
            }

        }
    }
    useEffect(() => {
        window.addEventListener('resize', resizeHandler)
        if (window.innerWidth <= 768) {
            slider = document.querySelector('.slider')
            if (slider) {
                last_scroll = 0
                window.addEventListener('scroll', handler)
            }
        }
    }, [])
    return (
        <>
            <div className="slider bg-white fixed h-14 w-full bottom-0 shadow-[0_6px_36px_-12px_rgba(0,0,0,0.3)] md:w-28 md:rounded-tr-[16px] md:rounded-br-[16px] md:left-0 md:h-[max(100vh,580px)] md:top-0">
                <ul className="flex justify-around items-center h-full md:flex-col">
                    {url.map((url: string, i: number) => { return <li key={i} className={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}` == `/dashboard/${url.split("_")[0]}` ? "opacity-80" : "opacity-40"} ><Link href={`/dashboard/${url.split("_")[0]}`} ><Image src={`/asset/${url}`} alt={url} width="26" height="26" className="mx-auto" /></Link></li> })}
                </ul>
            </div>
        </>
    )
}