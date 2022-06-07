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
    place: string;
    address: string;
    capacity: number;
    eventType: EventType;
    eventCategory: EventCategory;
    coverImage: string;
    tickets: Ticket[];
    promoCodes: PromoCode[];
    state: string;
}

export interface Order extends IAggregateRoot {
    tickets: OrderItem[]
    event: Event;
    eventRef: string;
    attendees: Attendee[]
}

interface Attendee extends Person {    
    photoUrl: string;
}

interface OrderItem {
    quantity: number;
    ticketRef: string;
    ticket: Ticket;
}

interface PromoCode {
    name: string;
    limitType: LimitType;
    limitedNumber: string;
    discountType: DiscountType;
    validity: Validity;
}

interface Ticket {
    name: string;
    ticketType: TicketType;
    availableQuantity: number;
    price: string;
    startSales: string;
    description: string;
    visibility: TicketVisibility;
    minimumQuantity: number;
    maximumQuantity: number;
    channel: TicketChannelOption;
    deliveryMethod: TicketDeliveryMethod;
}

enum TicketType {
    Payment,
    Free,
    Donation
}

enum TicketVisibility {
    Visible,
    hidden,
    HiddenWhenNotAvailable,
    CustomSchedule
}

enum TicketChannelOption {
    Everywhere,
    Online,
    Place
}

enum TicketDeliveryMethod {
    ETicket,
    Pickup
}

enum EventType {

    Conferencia = 'Conferencia',
    Seminarioocharla = 'Seminario o charla',
    Feriacomercial = 'Feria comercial',
    feriadeconsumooexposición = 'feria de consumo o exposición',
    Convención = 'Convención',
    Festivaloferia = 'Festival o feria',
    Conciertooactuación = 'Concierto o actuación',
    Proyección = 'Proyección',
    Cenaogala = 'Cena o gala',
    Clase = 'Clase',
    cursootaller = 'curso o taller',
    Encuentrooeventodered = 'Encuentro o evento de red',
    Fiestaoreuniónsocial = 'Fiesta o reunión social',
    Rally = 'Rally',
    Torneo = 'Torneo',
    Juegoocompetición = 'Juego o competición',
    Carreraoeventoderesistencia = 'Carrera o evento de resistencia',
    Visita = 'Visita',
    Atracción = 'Atracción',
    Acampada = 'Acampada',
    viajeoretiro = 'viaje o retiro',
    Comparecenciaofirma = 'Comparecencia o firma',
    Otro = 'Otro'

}

enum EventCategory {

    Musica = 'Música',
    Negociosyserviciosprofesionales = 'Negocios y servicios profesionales',
    Gastronomía = 'Gastronomía',
    Comunidadycultura = 'Comunidad y cultura',
    Artesescénicasyvisuales = 'Artes escénicas y visuales',
    Cinemediosdecomunicaciónyentretenimiento = 'Cine, medios de comunicación y entretenimiento',
    Deportesysalud = 'Deportes y salud',
    Saludybienestar = 'Salud y bienestar',
    Cienciaytecnología = 'Ciencia y tecnología',
    Viajesyactividadesalairelibre = 'Viajes y actividades al aire libre',
    Organizacionesycausasbenéficas = 'Organizaciones y causas benéficas',
    Religiónyespiritualidad = 'Religión y espiritualidad',
    Familiayeducación = 'Familia y educación',
    Díasdefiesta = 'Días de fiesta',
    Gobiernoypolítica = 'Gobierno y política',
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

enum DiscountType {
    Amount,
    Percent
}

enum LimitType {
    Unlimited,
    LimitedTo
}
