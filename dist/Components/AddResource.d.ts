import React from "react";
interface AddResourceProps {
    t?: (key: string, fallback?: string) => string;
}
declare const AddResource: ({ t }: AddResourceProps) => React.JSX.Element;
export default AddResource;
