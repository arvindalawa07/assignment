function planToReachDestination(fuelStops) {
  let lastPlaneFuel = 0;
  let lastPlaneIndex = 0;
  let currentFuel = fuelStops[0];
  let requiredPlanes = [fuelStops[0]];
  for (let i = 0; i < fuelStops.length; i++) {
    if (fuelStops[i] !== 0 && i !== 0) {
      lastPlaneFuel = fuelStops[i];
      lastPlaneIndex = i;
    }
    if (currentFuel == 0 && fuelStops[i] == 0 && lastPlaneFuel == 0) {
      return -1;
    } else if (currentFuel == 0 && fuelStops[i] > 0) {
      currentFuel = fuelStops[i] - 1;
      if (i !== fuelStops.length - 1) {
        requiredPlanes.push(fuelStops[i]);
      }
    } else if (currentFuel == 0 && fuelStops[i] == 0) {
      currentFuel = lastPlaneFuel - 1;
      i = lastPlaneIndex + 1;
      requiredPlanes.push(lastPlaneFuel);
      lastPlaneFuel = 0;
      lastPlaneIndex = 0;
    } else if (currentFuel > 0) {
      currentFuel--;
    }
  }
  requiredPlanes.push(fuelStops[fuelStops.length - 1]);
  return requiredPlanes;
}
function printPlanes(planes) {
  let result = "";

  for (let i = 0; i < planes.length; i++) {
    if (i === 0) {
      result += planes[i];
    } else {
      result += `->${planes[i]}`;
    }
  }

  return result;
}

const array_one = [2, 1, 2, 3, 1];
const array_two = [1, 6, 3, 4, 5, 0, 0, 0, 6];

const destination = planToReachDestination(array_two);
if (destination === -1) {
  console.log("You can not reach the destination");
} else {
  console.log(
    `The minimum number of planes required in this case is ${
      destination.length - 1
    } and plan is ${printPlanes(destination)}`
  );
}
