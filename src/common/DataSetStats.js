import intersect from 'lodash/intersection';
import union from 'lodash/union';
import difference from 'lodash/difference';
import objectValues from 'lodash/values';

/**
 * Contains several helper methods to perform operations on datasets. A dataset is a dictionary where
 * the keys are experiment accession codes, and the values are a list of sample accession codes.
 */
export class DataSetOperations {
  /**
   * Intersect two datasets
   * @param {*} d1 dataset 1
   * @param {*} d2 dataset 2
   */
  static intersect(d1, d2) {
    const result = {};
    const addedExperimentAccession = intersect(
      Object.keys(d1),
      Object.keys(d2)
    );
    for (const experimentAccession of addedExperimentAccession) {
      if (d2[experimentAccession].all) {
        result[experimentAccession] = d1[experimentAccession];
      } else if (d1[experimentAccession].all) {
        result[experimentAccession] = d2[experimentAccession];
      } else {
        result[experimentAccession] = intersect(
          d1[experimentAccession],
          d2[experimentAccession]
        );
      }
    }
    return result;
  }

  /**
   * Returns true if both given arguments have the same values, without considering their order
   * eg:
   * sameItems([1,2], [2,1]) === true
   * @param {Array} s1
   * @param {Array} s2
   */
  static _sameItems(s1, s2) {
    return difference(s1, s2).length === 0 && difference(s2, s1).length === 0;
  }

  static equal(d1, d2) {
    const d1Keys = Object.keys(d1);
    const d2Keys = Object.keys(d2);
    if (!DataSetOperations._sameItems(d1Keys, d2Keys)) {
      // d1 and d2 don't have the same accession codes
      return false;
    }

    for (const accession of d1Keys) {
      if (d1[accession].all) {
        if (d1[accession].total !== d2[accession].length) {
          return false;
        }
        continue;
      }
      if (d2[accession].all) {
        if (d2[accession].total !== d1[accession].length) {
          return false;
        }
        continue;
      }
      if (!DataSetOperations._sameItems(d1[accession], d2[accession])) {
        return false;
      }
    }

    return true;
  }
}

/**
 * Contains helper methods to calculate stats between a dataset and a slice of the dataset.
 * A slice has the same shape as the dataset
 */
export default class DataSetStats {
  /**
   *
   * @param {*} dataSet
   * @param {*} dataSetSlice Ensure all samples are already processed and can be added to the dataset
   */
  constructor(dataSet, dataSetSlice) {
    this.dataSet = dataSet || {};
    this.dataSetSlice = dataSetSlice;
  }

  /**
   * returns true if there are samples in the slice
   */
  anyProcessedSamples() {
    return objectValues(this.dataSetSlice).some(
      samples =>
        (samples && samples.length > 0) ||
        (samples && samples.all && samples.total > 0)
    );
  }

  allProcessedInDataSet() {
    if (!this.anyProcessedSamples()) return false;
    const addedSlice = this.getAddedSlice();
    return DataSetOperations.equal(addedSlice, this.dataSetSlice);
  }

  anyProcessedInDataSet() {
    return objectValues(this.getAddedSlice()).some(
      samples => samples && samples.length > 0
    );
  }

  getAddedSlice() {
    return DataSetOperations.intersect(this.dataSet, this.dataSetSlice);
  }

  /**
   * returns the samples in `dataSetSlice` that are also part of the dataSet
   */
  getSamplesInDataSet() {
    const addedSlice = this.getAddedSlice();
    return union(...objectValues(addedSlice));
  }

  totalSamplesInDataSet() {
    return this.getSamplesInDataSet().length;
  }

  /**
   * Returns a list of accession codes of the processed samples
   * @param {Array} samples List of samples as sent by the server
   */
  static mapAccessions(samples) {
    return samples
      .filter(sample => sample.is_processed)
      .map(sample => sample.accession_code);
  }
}
