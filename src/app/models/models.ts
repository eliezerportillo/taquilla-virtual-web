interface IAggregateRoot {
    id: string;
}

interface Person {
    firstName: string;
    lastName: string;
}

export interface Account extends IAggregateRoot, Person {
    company: string;
    country: string;
    phoneNumber: string;
    pricingPlan: string;
}

export interface Event extends IAggregateRoot {
    name: string;
    description: string;
    date: Date,
    place: string;
    address: string;
    capacity: number;
    eventType: EventType;
    eventCategory: EventCategory;
    eventMessage: string;
    coverImage: string;
    tickets: Ticket[];
    ticketLimitPerOrder?: number,
    promoCodes: PromoCode[];
    state: string;

}

export interface IOrder extends IAggregateRoot {
    tickets: IOrderTicket[]
    customer: ICustomer;
    event: Event;
    eventRef: string;
    orderResponse?: any;
}

export interface IAttendee extends Person {
    photoFile?: string | ArrayBuffer | null;
    photoUrl: string;
}

export interface ICustomer extends Person {
    email: string;
}

export interface IOrderTicket {
    quantity: number;
    attendees: IAttendee[]
    ticketRef: string;
    ticket?: Ticket;
}

interface PromoCode {
    name: string;
    limitType: LimitType;
    limitedNumber: number;
    discountType: DiscountType;
    validity: Validity;
}

export interface Ticket {
    name: string;
    ticketType: TicketType;
    availableQuantity: number;
    price: number;
    startSales: string;
    description: string;
    visibility: TicketVisibility;
    minimumQuantity: number;
    maximumQuantity: number;
    channel: TicketChannelOption;
    deliveryMethod: TicketDeliveryMethod;
}

export enum TicketType {
    Payment,
    Free,
    Donation
}

export enum TicketVisibility {
    Visible,
    hidden,
    HiddenWhenNotAvailable,
    CustomSchedule
}

export enum TicketChannelOption {
    Everywhere,
    Online,
    Place
}

export enum TicketDeliveryMethod {
    ETicket,
    Pickup
}

export enum EventType {

    Conferencia = 'Conferencia',
    Seminarioocharla = 'Seminario o charla',
    Feriacomercial = 'Feria comercial',
    feriadeconsumooexposici??n = 'feria de consumo o exposici??n',
    Convenci??n = 'Convenci??n',
    Festivaloferia = 'Festival o feria',
    Conciertooactuaci??n = 'Concierto o actuaci??n',
    Proyecci??n = 'Proyecci??n',
    Cenaogala = 'Cena o gala',
    Clase = 'Clase',
    cursootaller = 'curso o taller',
    Encuentrooeventodered = 'Encuentro o evento de red',
    Fiestaoreuni??nsocial = 'Fiesta o reuni??n social',
    Rally = 'Rally',
    Torneo = 'Torneo',
    Juegoocompetici??n = 'Juego o competici??n',
    Carreraoeventoderesistencia = 'Carrera o evento de resistencia',
    Visita = 'Visita',
    Atracci??n = 'Atracci??n',
    Acampada = 'Acampada',
    viajeoretiro = 'viaje o retiro',
    Comparecenciaofirma = 'Comparecencia o firma',
    Otro = 'Otro'

}

export enum EventCategory {

    Musica = 'M??sica',
    Negociosyserviciosprofesionales = 'Negocios y servicios profesionales',
    Gastronom??a = 'Gastronom??a',
    Comunidadycultura = 'Comunidad y cultura',
    Artesesc??nicasyvisuales = 'Artes esc??nicas y visuales',
    Cinemediosdecomunicaci??nyentretenimiento = 'Cine, medios de comunicaci??n y entretenimiento',
    Deportesysalud = 'Deportes y salud',
    Saludybienestar = 'Salud y bienestar',
    Cienciaytecnolog??a = 'Ciencia y tecnolog??a',
    Viajesyactividadesalairelibre = 'Viajes y actividades al aire libre',
    Organizacionesycausasben??ficas = 'Organizaciones y causas ben??ficas',
    Religi??nyespiritualidad = 'Religi??n y espiritualidad',
    Familiayeducaci??n = 'Familia y educaci??n',
    D??asdefiesta = 'D??as de fiesta',
    Gobiernoypol??tica = 'Gobierno y pol??tica',
    Modaybelleza = 'Moda y belleza',
    Hogaryestilodevida = 'Hogar y estilo de vida',
    Cochesbarcosyaviones = 'Coches, barcos y aviones',
    Aficioneseinteresesespeciales = 'Aficiones e intereses especiales',
    Otro = 'Otro',
    Actividadesescolares = 'Actividades escolares',

}





interface Validity {
    startDate: Date;
    endDate: Date;
}

export enum DiscountType {
    Amount,
    Percent
}

export enum LimitType {
    Unlimited,
    LimitedTo
}
