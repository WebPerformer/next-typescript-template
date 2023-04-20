import Head from "next/head"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="layout">
            <Head>
                <title>Typescript Template</title>
            </Head>
            <header></header>
            <main className="">
                {children}
            </main>
            <footer></footer>
        </div>
    )
}