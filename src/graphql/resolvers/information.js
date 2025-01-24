import { useQuery } from "@apollo/client";
import { GET_INFORMATION } from "../querys/information";

export const GetInformation = () => {
    const { loading, error, data } = useQuery(GET_INFORMATION);

    return {
        loading,
        error,
        data
    }
}