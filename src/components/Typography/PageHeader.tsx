import React from "react";

export type PageHeaderProps = {
    heading: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ heading }) =>
{
    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight text-gray-900"
                >{heading}</h1>
            </div>
        </header>
    );
};

export default PageHeader;