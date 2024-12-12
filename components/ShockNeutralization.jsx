import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ShockNeutralization() {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center">
                <Card className="min-w-[500px]">
                    <CardHeader>
                        <CardTitle>Shock Neutralization</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-8">
                        <div className="space-y-6">
                            <p>
                                <strong>Shock Neutralization</strong> performed after a fecal
                                release relies on the Pool Dynamic (PPM ClO2 per minute based on the
                                total pool volume) to perform the Remediation cycle. The time and
                                dosage required to complete this cycle should not change by any
                                significant amount. So, once you have the Neutralization feed rate
                                and duration (time) dialed in, the need to make additional
                                adjustments should be minor if at all. In most cases, assuming the
                                Free Residual of 10ppm will get you close to neutralizing the excess
                                residual, then you can modify to dial in to achieve optimum results
                                in the shortest time.
                            </p>
                            <p>
                                <strong>You will need to following information:</strong>
                            </p>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Pool Volume _______ gallons</li>
                                <li>
                                    Neutralizer Feed Rate _______ gal/min (Pump of Venturi Output)
                                </li>
                                <li>
                                    Total Free Residual from DPD Test _______ PPM (Reported as Cl
                                    <sub>2</sub>)
                                </li>
                                <li>
                                    Cryptolyte Startup Feed Duration (Hours - Minutes) This is the
                                    TOTAL time from Start to Finish
                                </li>
                                <li>
                                    Cryptolyte Feed Duration (Min) This is the TOTAL time from Start
                                    to Finish
                                </li>
                                <li>
                                    Shock Neutralizer (gal) = [Pool Volume (gal)/10,000] x [Free
                                    Residual Cl<sub>2</sub> PPM/10] x 0.26
                                </li>
                                <li>
                                    Dechlor Feed Time (Min) = Shock Neutralizer (gal) / Neutralizer
                                    Feed Rate (gal/min)
                                </li>
                                <li>
                                    Shock Neutralizer (gal) = [Pool Volume (gal)/10,000] x [Free
                                    Residual Cl<sub>2</sub> PPM/10] x 0.26
                                </li>
                                <li>
                                    <strong>Dechlor Feed Time (Min)</strong> = Shock Neutralizer
                                    (gal) / Neutralizer Feed Rate (gal/min){" "}
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl mt-12 underline font-bold text-[#2F5496]">
                                Setup DeChlor
                            </h2>
                            <p>From the main menu, press the "Menu" key to enter the menus.</p>
                            <p>Login as Rep if necessary. Select "Control Outputs".</p>
                            <p>Select "Dechlorination".</p>
                            <p>
                                The <strong>Crypto Feed Factor</strong> &{" "}
                                <strong>Crypto Comp Factor</strong> parameters are used to calculate
                                how much Neutralizer will be applied. These parameters are ratios
                                based on the <span className="underline">TOTAL DURATION</span> of
                                the Shock Feed Cycle, not just the "ON TIME".
                            </p>
                            <div className="space-y-2">
                                <p>
                                    <strong>DeChlor Feed Time (min)</strong>
                                </p>
                                <p className="ml-4">
                                    <strong>
                                        {" "}
                                        = Cryptolyte Startup Feed Duration (min) * Crypto Feed
                                        Factor * Crypto Comp Factor
                                    </strong>
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p>
                                    Set the appropriate values for the Factors to achieve the
                                    Dechlor Feed Time
                                </p>
                                <ul className="list-inside list-disc ml-4 space-y-1">
                                    <li>
                                        <strong>Crypto Feed Factor</strong>
                                    </li>
                                    <li>
                                        Used to determines DeChlor feed duration based on Cryptolyte
                                        Shock feed
                                    </li>
                                    <li>
                                        (TOTAL duration of the Feed Cycle – NOT Cryptolyte Feeder
                                        ON-Time)
                                    </li>
                                    <li className="ml-8">
                                        <strong>Default value – 0.25</strong>
                                    </li>
                                </ul>
                                <li className="space-y-1">
                                    <strong>Crypto Comp Factor</strong>
                                    <ul className="list-inside list-disc ml-4 space-y-1">
                                        <li>
                                            Factor to make minor adjustments to DeChlor feed
                                            duration.
                                        </li>
                                        <li className="ml-8">Default value – 1.0</li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
