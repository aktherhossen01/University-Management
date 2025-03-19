import { useGetAllSemestersQuery } from "../../../redux/features/academicSemister/academicSemisterApi";


const AcademicSemester = () => {

    const {data}=useGetAllSemestersQuery(undefined)
    console.log(data);
    
    return (
        <div>
            <h1>this is academic semester</h1>
        </div>
    );
};

export default AcademicSemester;