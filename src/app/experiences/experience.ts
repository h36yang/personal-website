import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class Experience {

    employer: string;
    logo: IconDefinition;
    color: string;
    title: string;
    location: string;
    startTime: Date;
    endTime?: Date;
}
