export interface Dimension {
  feet: number;
  meters: number;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface Engine {
  engineLossMax: string;
  layout: string;
  number: number;
  propellant1: string;
  propellant2: string;
  thrustSeaLevel: Thrust;
  thrustToWeight: number;
  thrustVacuum: Thrust;
  type: string;
  version: string;
}

export interface LandingLegs {
  material: string;
  number: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface PayloadWeight {
  id: string;
  kg: number;
  lb: number;
  name: string;
}

export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  costPerLaunch: number;
  country: string;
  description: string;
  diameter: Dimension;
  engines: Engine;
  firstFlight: string;
  height: Dimension;
  id: string;
  landingLegs: LandingLegs;
  mass: Mass;
  name: string;
  payloadWeights: PayloadWeight[];
  stages: number;
  successRatePct: number;
  type: string;
  wikipedia: string;
}
