"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = function (items, page, per_page) {
    if (page === void 0) { page = 1; }
    if (per_page === void 0) { per_page = 100; }
    return new Promise(function (resolve, _reject) {
        var offset = (page - 1) * per_page;
        var paginatedItems = items.slice(offset).slice(0, per_page);
        var total_pages = Math.ceil(items.length / per_page);
        return resolve({
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: total_pages > page ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        });
    });
};
