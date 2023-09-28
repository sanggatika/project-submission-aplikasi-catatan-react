import React from 'react';

class CatatanFilterPencarian extends React.Component {
    // constructor dan handler
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            filterCatatan: '', // Ini adalah state untuk input pencarian
        }
    }

    onFilterCatatanChangeEventHandler = (e) => {
        const { value } = e.target;
        this.setState({ filterCatatan: value }, () => {
          // Setelah input pencarian berubah, panggil fungsi pencarian
          this.props.onFilter(value);
        });
    }

    render() {
        return (
            <div className="catatan-filter">
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label fw-bold">Filter Catatan</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Filter Catatan Pribadi" value={this.state.filterCatatan} onChange={this.onFilterCatatanChangeEventHandler} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CatatanFilterPencarian;