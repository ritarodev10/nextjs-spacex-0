import { Rocket } from "../entities/rocket.entity";
import { GetRocketQuery } from "@/__generated__/graphql";

export const rocketMapper = {
  mapRocket: (data: GetRocketQuery["rocket"]): Rocket | null => {
    if (!data) return null;
    return {
      active: data.active || false,
      boosters: data.boosters || 0,
      company: data.company || "",
      costPerLaunch: data.cost_per_launch || 0,
      country: data.country || "",
      description: data.description || "",
      diameter: {
        feet: data.diameter?.feet || 0,
        meters: data.diameter?.meters || 0,
      },
      engines: {
        engineLossMax: data.engines?.engine_loss_max || "",
        layout: data.engines?.layout || "",
        number: data.engines?.number || 0,
        propellant1: data.engines?.propellant_1 || "",
        propellant2: data.engines?.propellant_2 || "",
        thrustSeaLevel: {
          kN: data.engines?.thrust_sea_level?.kN || 0,
          lbf: data.engines?.thrust_sea_level?.lbf || 0,
        },
        thrustToWeight: data.engines?.thrust_to_weight || 0,
        thrustVacuum: {
          kN: data.engines?.thrust_vacuum?.kN || 0,
          lbf: data.engines?.thrust_vacuum?.lbf || 0,
        },
        type: data.engines?.type || "",
        version: data.engines?.version || "",
      },
      firstFlight: data.first_flight || "",
      height: {
        feet: data.height?.feet || 0,
        meters: data.height?.meters || 0,
      },
      id: data.id || "",
      landingLegs: {
        material: data.landing_legs?.material || "",
        number: data.landing_legs?.number || 0,
      },
      mass: {
        kg: data.mass?.kg || 0,
        lb: data.mass?.lb || 0,
      },
      name: data.name || "",
      payloadWeights:
        data.payload_weights?.map((pw) => ({
          id: pw?.id || "",
          kg: pw?.kg || 0,
          lb: pw?.lb || 0,
          name: pw?.name || "",
        })) || [],
      stages: data.stages || 0,
      successRatePct: data.success_rate_pct || 0,
      type: data.type || "",
      wikipedia: data.wikipedia || "",
    };
  },
};
