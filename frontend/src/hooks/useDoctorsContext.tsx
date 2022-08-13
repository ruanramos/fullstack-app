import { useContext } from "react";
import { DoctorsContext } from "../context/DoctorsContext";

const useDoctorsContext = () => {
    const context = useContext(DoctorsContext);

    if (!context) {
        throw new Error("useDoctorsContext must be used within a DoctorsProvider");
    }

    return context;
}

export default useDoctorsContext;