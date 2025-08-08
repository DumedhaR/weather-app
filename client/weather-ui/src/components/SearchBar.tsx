
const SearchBar = () => {
    return (
        <div className="flex items-center justify-center text-[16px]">
            <div className="relative w-full max-w-md">
                <input type="text" placeholder="Enter a city" className="bg-[#1e2027] p-3 pr-36 rounded-md outline-none w-full" disabled/>
                <button className="absolute bg-[#6c5dd3] right-0 top-0 rounded-md py-3 px-6 font-semibold shadow-sm hover:bg-[#6c5dd3]/90 transition">Add City</button>
            </div>
        </div>
    )
}

export default SearchBar;