export const tripMock: TripMockTypes[] = [
  {
    fieldName: 'passenger',
    fieldText: 'Nombre del pasajero',
    placeholder: 'Roberto Costas',
  },
  {
    fieldName: 'amount',
    fieldText: 'Importe',
    placeholder: '$5000',
  },
  {
    fieldName: 'number_passengers',
    fieldText: 'Cantidad de pasajeros',
    placeholder: '4',
  },
  {
    fieldName: 'from',
    fieldText: 'Desde',
    placeholder: 'Av Corrientes 2000',
  },
  {
    fieldName: 'to',
    fieldText: 'Hacia',
    placeholder: 'Av Paseo Colón 500',
  },
];

export interface TripMockTypes {
  fieldName: string;
  fieldText: string;
  placeholder: string;
}
