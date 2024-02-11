import React from 'react'
import Logo from "../assets/logo.svg"
import Search from './Search'
import FavModal from './FavModal'
import FavItem from './FavItem'
const Header = () => {
    return (
        <>
            <header class="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
                <nav class="container w-full flex items-center justify-between py-6">
                    <a href="./index.html">
                        <img class="h-9" src={Logo} alt="Weather App" />
                    </a>

                    <div class="flex items-center gap-4 relative">
                        <Search />
                        <FavItem />

                        {/* <!-- Modal --> */}
                        <FavModal />

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header