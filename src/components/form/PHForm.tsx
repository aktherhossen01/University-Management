import { ReactNode } from "react";
import { FieldValues, FormProvider, SubmitErrorHandler, useForm } from "react-hook-form";


type TFormProps ={
    onSubmit :SubmitErrorHandler<FieldValues>;
    children:ReactNode
}& TFormConfig;

type TFormConfig ={
    defaultValues?:Record<string,any>
}

const PHForm = ({onSubmit,children,defaultValues}:TFormProps) => {
    const formConfig:TFormConfig = {};

    if(defaultValues){
        formConfig['defaultValues']= defaultValues
    }

    const methods= useForm(formConfig)
    return (
        <FormProvider {...methods}>

        <form onSubmit={methods.handleSubmit(onSubmit)}>
            {children}
        </form>
        </FormProvider>
    );
};

export default PHForm;