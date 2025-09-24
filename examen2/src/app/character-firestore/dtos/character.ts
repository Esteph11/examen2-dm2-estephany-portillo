export interface CharacterDto {
  id: string;
  name: string;
  gender: 'Male' | 'Female' | 'Other';
  status: 'Alive' | 'Dead' | 'Unknown';
  species: string;
  image: string;
  created: Date;
}
