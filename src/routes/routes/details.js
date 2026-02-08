import { getRouteById, getSchedulesByRoute } from '../../models/model.js';
import { numToMonth } from '../../includes/helpers.js';

export default async (req, res) => {
    const { routeId } = req.params;
    const details = await getRouteById(routeId);
    details.schedules = await getSchedulesByRoute(routeId);
    details.operatingMonths = details.operatingMonths.map(numToMonth);

    // TODO: getCompleteRouteDetails instead

    res.render('routes/details', { 
        title: 'Route Details',
        details
    });
};