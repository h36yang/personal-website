import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export class Experience {

    employer: string;
    logo: IconDefinition;
    color: string;
    title: string;
    location: string;
    startTime: Date;
    endTime?: Date;
}
