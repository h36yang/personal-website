export class Certification {

    title: string;
    date: Date;
    link?: string;
}

export class Organization {

    name: string;
    certificates: Certification[];
}
