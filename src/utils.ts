import type { ProjectMetadata } from '@/data/projects';

export { cn } from 'cn';

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };
  return date.toLocaleDateString(undefined, options);
};

export const formatDateRange = (startDateString: string, endDateString?: string | null): string => {
  if (!endDateString) {
    return `${formatDate(startDateString)} to present`;
  }
  return `${formatDate(startDateString)} to ${formatDate(endDateString)}`;
};

export const sortProjectsByDate = (a: ProjectMetadata, b: ProjectMetadata) => {
  if (!a.endDate) return -1;
  if (!b.endDate) return 1;
  return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
};
