const shortName = name => {
  if (name.length > 25)
    return name.substr(0, 30) + '...'
  else
    return name
}

export default (shortName)