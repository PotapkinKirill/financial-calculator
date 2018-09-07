const shortName = name => {
  if (name.length > 22)
    return name.substr(0, 22) + '...'
  else
    return name
}

export default (shortName)