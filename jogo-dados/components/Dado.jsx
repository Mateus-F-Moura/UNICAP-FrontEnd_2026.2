import Image from "next/image";

const IMAGENS_DADO = {
    0: "/dados/dado-vazio.svg",
    1: "/dados/dado-1.svg",
    2: "/dados/dado-2.svg",
    3: "/dados/dado-3.svg",
    4: "/dados/dado-4.svg",
    5: "/dados/dado-5.svg",
    6: "/dados/dado-6.svg"
};

export default function Dado({ valor }) {
    const src = IMAGENS_DADO[valor] ?? IMAGENS_DADO[0];
    return <Image src={src} alt={`Dado: ${valor}`} width="64" height="64" />;
}