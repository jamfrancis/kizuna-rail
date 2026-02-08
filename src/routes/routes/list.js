import { getAllRoutes, getListOfRegions, getListOfSeasons, getRoutesByRegion, getRoutesBySeason } from '../../models/model.js';

export default async (req, res) => {
    const regions = await getListOfRegions();
    let routes = await getAllRoutes();
    const seasons = await getListOfSeasons();

    const query = {
        region: req.query.region,
        season: req.query.season
    };

    if (query.region && query.region !== 'all') {
        routes = routes.filter(route => route.region === query.region);
    }
    if (query.season && query.season !== 'all') {
        routes = routes.filter(route => route.bestSeason === query.season);
    }

    res.render('routes/list', {
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons,
        query
    });
};