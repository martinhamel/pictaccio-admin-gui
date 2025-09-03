import {
    SalesReportAggregateSeriesFeatureEntry,
    SalesReportProductSeriesFeatureEntry,
    SalesReportSalesSeriesFeatureEntry
} from '@pictaccio/shared/types/report';

export type SalesReportStreams = {
    salesSeries: SalesReportSalesSeriesFeatureEntry;
    productSeries: SalesReportProductSeriesFeatureEntry;
    aggregateSeries: SalesReportAggregateSeriesFeatureEntry;
}
