import HeadderX from "@/components/headerx";
import STDash from "@/components/STDash";
import ContractPage from "@/components/ContractPage";
import Futter from "@/components/futter";

export default ()=>{


    return<>

        <HeadderX/>

        <div className="d-flex">

            <STDash/>
            <div className="d-flex w-100 justify-content-center   text-center overflow-x-hidden"  >

                <div className="w-100">

                    <h4 className="fw-bold w-100 py-3 text-center"
                        style={{backgroundColor: "#f7a21a", color: "white"}}>Contract US </h4>




                    <ContractPage/>

                </div>



            </div>


        </div>
        <Futter/>

    </>
}