import {
    SalesReportAggregateSeriesFeatureEntry,
    SalesReportProductSeriesFeatureEntry,
    SalesReportSalesSeriesFeatureEntry
} from '@pictaccio/shared/src/types/report';

export type SalesReportStreams = {
    salesSeries: SalesReportSalesSeriesFeatureEntry;
    productSeries: SalesReportProductSeriesFeatureEntry;
    aggregateSeries: SalesReportAggregateSeriesFeatureEntry;
}
