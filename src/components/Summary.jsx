function Summary() {
    return (
        <main className="bg-zinc-900 flex-1 text-zinc-100 flex justify-around items-center py-8">
            <div className="w-32 h-32 border-4 rounded-lg flex flex-col justify-center items-center">
                <label className="mb-2">Total Balance</label>
                <span className="text-2xl font-bold">0</span>
            </div>
            <div className="w-32 h-32 border-4 rounded-lg flex flex-col justify-center items-center">
                <label className="mb-2">Total Income</label>
                <span className="text-2xl font-bold">0</span>
            </div>
            <div className="w-32 h-32 border-4 rounded-lg flex flex-col justify-center items-center">
                <label className="mb-2">Total Expenses</label>
                <span className="text-2xl font-bold">0</span>
            </div>
        </main>
    )
}

export default Summary