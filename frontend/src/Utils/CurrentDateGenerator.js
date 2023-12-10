export function dateGen() {
    return new Date().toISOString().split('T')[0];
}