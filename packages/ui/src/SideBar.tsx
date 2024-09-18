export const SideBar = ({ routing }: any) => {
    return <div>
        <div className="grid grid-cols-12 mx-8 my-4">
            <div className="col-span-2 bg-stone-200 h-screen">
                <div className="flex justify-center">

                    <div className="flex justify-center flex-col mt-5">
                        <div> (H) Home</div>
                        {/* <button ></button> */}
                        <div> (T) Transactions</div>
                        <div> (T) Transfer</div>
                    </div>
                </div>
            </div>
            <div className="col-span-8">
                main dashboard, Good afternoon Rishit
            </div>
            <div className="col-span-2">
                History
            </div>
        </div>
    </div>
}