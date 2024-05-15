import PhuongThucThanhToanOption from "@/components/PhuongThucThanhToan/PhuongThucThanhToanOption";
import ThanhToanHead from "@/components/ThanhToan/ThanhToanHead";
import ThanhToanInfo from "@/components/ThanhToan/ThanhToanInfo";

function PhuongThucThanhToan() {
    return (
        <div>
            <div className="container">
                <div className="row w-[95%] sm:w-[80%] mx-auto flex flex-col-reverse lg:flex-row gap-16 py-10">
                    <div className="basis-3/5">
                        <ThanhToanHead />
                        <PhuongThucThanhToanOption />
                    </div>
                    <hr className="w-0.5 bg-gray-300 h-[500px] hidden lg:block" />
                    <ThanhToanInfo />
                </div>
            </div>
        </div>
    );
}

export default PhuongThucThanhToan;