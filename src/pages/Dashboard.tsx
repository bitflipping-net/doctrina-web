import React from "react";
import PageHeader from "../components/Typography/PageHeader";
import Stats from "../components/DataDisplay/Stats";
import PersonaList from "../components/Lists/PersonaList";

const Dashboard = () =>
{
    return (
        <>
            <PageHeader heading="Dashboard" />
            <main>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Stats
                        heading="Last 30 days"
                        items={[
                            {
                                heading: "Total statements",
                                from: 71200,
                                to: 73400,
                                comparatorValue: "",
                                comparatorText: "",
                                negative: false
                            },
                            {
                                heading: "Total agents",
                                from: "1200",
                                to: 73400,
                                comparatorValue: "",
                                comparatorText: "",
                                negative: false
                            },
                            {
                                heading: "Total activities",
                                from: 31,
                                to: 32,
                                comparatorValue: "",
                                comparatorText: "",
                                negative: false
                            }
                        ]} />

                    <PersonaList items={[]} />
                </div>
            </main>
        </>
    );
}

export default Dashboard;