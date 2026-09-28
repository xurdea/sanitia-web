const dateFormatter = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

export const formatDate = (date: Date) => dateFormatter.format(date);
