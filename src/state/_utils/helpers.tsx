const getTypeColor = (type: string): string => {
  switch (type?.trim()) {
    case 'fire':
    case 'dragon':
      return 'red'
    case 'grass':
      return 'green'
    case 'poison':
      return 'poison'
    case 'bug':
      return 'purple'
    case 'water':
      return 'blue'
    case 'electric':
    case 'psychic':
      return 'yellow'
    case 'ground':
    case 'rock':
      return 'rock'
    case 'flying':
    case 'fighting':
      return 'orange'
    case 'fairy':
      return 'teal'
    default:
      return 'white'
  }
}

export default getTypeColor
